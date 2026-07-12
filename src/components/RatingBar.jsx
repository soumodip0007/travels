import { useEffect, useState, useRef } from "react";
import { Plane, BedDouble, Globe2, Car } from "lucide-react";

const stats = [
  { number: 1523, title: "Flights Booked", icon: Plane },
  { number: 2387, title: "Hotels Reserved", icon: BedDouble },
  { number: 3120, title: "Tours Organized", icon: Globe2 },
  { number: 1854, title: "Cars Rented", icon: Car },
];

function useCountUp(end, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, start]);

  return value;
}

function StatItem({ number, title, icon: Icon }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const value = useCountUp(number, 2000, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <Icon size={22} className="mb-3 text-white" strokeWidth={2} />
      <h2 className="text-5xl font-black text-white leading-none">
        {value}
      </h2>
      <p className="mt-4 text-base font-bold text-white">{title}</p>
    </div>
  );
}

export default function RatingBar() {
  return (
    <section className="bg-gradient-to-tr from-blue-800 to-orange-500 py-16">
      <div className="mx-auto grid w-[92%] max-w-6xl grid-cols-2 gap-y-12 md:grid-cols-4">
        {stats.map((item, index) => (
          <StatItem
            key={index}
            number={item.number}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}