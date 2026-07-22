import { useLayoutEffect, useRef, useState } from "react";
import TourDayCard from "./TourDayCard";

export default function TourPlan({ tour }) {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);
  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0 });

  useLayoutEffect(() => {
    const calculateLine = () => {
      const container = containerRef.current;
      const circles = circleRefs.current.filter(Boolean);
      if (!container || circles.length === 0) return;

      const containerTop = container.getBoundingClientRect().top;
      const first = circles[0].getBoundingClientRect();
      const last = circles[circles.length - 1].getBoundingClientRect();

      const top = first.top - containerTop + first.height / 2;
      const bottom = last.top - containerTop + last.height / 2;

      setLineStyle({ top, height: bottom - top });
    };

    calculateLine();
    window.addEventListener("resize", calculateLine);
    return () => window.removeEventListener("resize", calculateLine);
  }, [tour]);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-[92%] max-w-7xl">
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

        <div ref={containerRef} className="relative">
          <div
            className="absolute left-8 hidden w-1 rounded-full bg-sky-100 md:block"
            style={{ top: lineStyle.top, height: lineStyle.height }}
          ></div>

          {tour.itinerary.map((day, index) => (
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
      </div>
    </section>
  );
}