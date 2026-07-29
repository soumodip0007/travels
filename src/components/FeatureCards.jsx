
import {
  Plane,
  Train,
  Bus,
  Globe,
  MapPin,
  Hotel,
  ChevronDown,
} from "lucide-react";

const features = [
  {
    title: "Flight Booking",
    icon: Plane,
  },
  {
    title: "Train Booking",
    icon: Train,
  },
  {
    title: "Bus & Car",
    icon: Bus,
  },
  {
    title: "International Tour Plan",
    icon: Globe,
  },
  {
    title: "Domestic Tour Plan",
    icon: MapPin,
  },
  {
    title: "Hotel & Resort",
    icon: Hotel,
  },
];

function FeatureItem({ item }) {
  const Icon = item.icon;

  return (
    <a
      href="#"
      className="group flex flex-col items-center rounded-3xl border border-purple-100 bg-white/70 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-4 hover:border-purple-200 hover:bg-white hover:shadow-[0_25px_60px_rgba(105,87,223,0.18)]"
    >
      {/* Icon */}
      <div
        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl
        border-[3px] border-[#6957DF]
        bg-white
        text-[#6957DF]
        shadow-lg
        transition-all duration-500
        group-hover:-translate-y-2
        group-hover:scale-110
        group-hover:rotate-6
        group-hover:border-transparent
        group-hover:bg-gradient-to-br
        group-hover:from-[#6957DF]
        group-hover:to-[#9F7AEA]
        group-hover:text-white
        group-hover:shadow-[0_20px_40px_rgba(147,51,234,0.45)]"
      >
        <Icon size={34} className="transition-all duration-500" />
      </div>

      {/* Title */}
      <h3 className="mt-5 flex h-12 items-center justify-center text-center text-lg font-bold leading-snug text-slate-800 transition-all duration-300 group-hover:text-[#6957DF]">
        {item.title}
      </h3>

      {/* CTA */}
      <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-slate-400 transition-all duration-300 group-hover:gap-2 group-hover:text-[#7C3AED]">
        Explore
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </a>
  );
}

export default function FeatureCards() {
  return (
    <section className="relative z-40 -mt-28 md:-mt-32 lg:-mt-30">
      <style>{`
        @keyframes chevronDrop {
          0%   { opacity: 0; transform: translateY(-6px); }
          20%  { opacity: 1; }
          60%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(12px); }
        }

        .chevron-1 {
          animation: chevronDrop 1.8s ease-in-out infinite;
          animation-delay: 0s;
        }

        .chevron-2 {
          animation: chevronDrop 1.8s ease-in-out infinite;
          animation-delay: 0.25s;
        }

        .chevron-3 {
          animation: chevronDrop 1.8s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>

      <div className="mx-auto w-[94%] max-w-7xl">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          className="relative overflow-visible rounded-[40px] border border-purple-100 bg-gradient-to-br from-white via-[#F7F5FF] to-[#F3E8FF] px-4 py-8 shadow-[0_30px_90px_rgba(105,87,223,0.18)] md:rounded-[52px] md:px-6 md:py-10 lg:rounded-[64px] lg:px-10 lg:py-12"
        >
          {/* Decorative Glows */}
          <div className="pointer-events-none absolute -right-16 -top-16 hidden h-64 w-64 rounded-full bg-[#A855F7]/15 blur-3xl lg:block"></div>
          <div className="pointer-events-none absolute -bottom-20 -left-10 hidden h-72 w-72 rounded-full bg-[#6957DF]/10 blur-3xl lg:block"></div>

          {/* Desktop only: Diamond + Arrows */}
          <div className="absolute left-1/2 top-0 z-30 hidden -translate-x-1/2 -translate-y-[24%] lg:block">
            <div className="flex flex-col items-center">
              {/* Diamond */}
              <div className="relative flex items-center justify-center py-2">
                <div className="absolute h-32 w-32 rounded-full bg-[#A855F7]/15 blur-2xl"></div>

                <div className="relative h-20 w-20 rotate-45 rounded-xl border border-white/50 bg-gradient-to-br from-white via-[#F7F5FF] to-[#E9D5FF] shadow-[0_20px_45px_rgba(105,87,223,0.28)] backdrop-blur-xl">
                  <div className="absolute inset-[7px] rounded-lg bg-gradient-to-br from-[#6957DF] via-[#7C3AED] to-[#A855F7]"></div>
                  <div className="absolute inset-[11px] rounded-md border border-white/35 bg-white/5"></div>
                  <div className="absolute left-2 top-2 h-3 w-8 rounded-full bg-white/70 blur-[5px]"></div>
                </div>

                <div className="absolute top-[86px] h-3 w-16 rounded-full bg-[#6957DF]/12 blur-md"></div>
              </div>

              {/* Animated Arrows */}
              <div className="mt-3 flex flex-col items-center gap-1">
                <ChevronDown
                  className="chevron-1 h-8 w-8 text-[#6957DF]"
                  strokeWidth={3}
                />

                <ChevronDown
                  className="chevron-2 -mt-3 h-8 w-8 text-[#7C3AED]"
                  strokeWidth={3}
                />

                <ChevronDown
                  className="chevron-3 -mt-3 h-8 w-8 text-[#A855F7]"
                  strokeWidth={3}
                />
              </div>
            </div>
          </div>

          {/* Mobile + Tablet: Single grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-2 lg:hidden">
            {features.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                data-aos-duration="800"
              >
                <FeatureItem item={item} />
              </div>
            ))}
          </div>

          {/* Desktop: Two groups with spacing */}
          <div className="hidden lg:flex lg:items-start lg:justify-center lg:gap-8 xl:gap-12">
            {/* Left 3 cards */}
            <div className="grid flex-1 grid-cols-3 gap-6">
              {features.slice(0, 3).map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={i * 120}
                  data-aos-duration="900"
                >
                  <FeatureItem item={item} />
                </div>
              ))}
            </div>

            {/* Right 3 cards */}
            <div className="grid flex-1 grid-cols-3 gap-6">
              {features.slice(3, 6).map((item, i) => (
                <div
                  key={i + 3}
                  data-aos="fade-left"
                  data-aos-delay={i * 120}
                  data-aos-duration="900"
                >
                  <FeatureItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

