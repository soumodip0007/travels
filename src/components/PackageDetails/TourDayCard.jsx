import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Ship,
  Compass,
  Waves,
  Moon,
  Hotel,
  Camera,
  Landmark,
  Coffee,
  UtensilsCrossed,
  Sunset,
  Sunrise,
  Mountain,
  Umbrella,
  ShoppingBag,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const DESCRIPTION_ICON_MAP = [
  { pattern: "boat excursion", Icon: Ship },
  { pattern: "island excursion", Icon: Compass },
  { pattern: "coral island", Icon: Waves },
  { pattern: "overnight stay", Icon: Moon },
  { pattern: "hotel stay", Icon: Hotel },
  { pattern: "snorkeling", Icon: Waves },
  { pattern: "sightseeing", Icon: Camera },
  { pattern: "excursion", Icon: Compass },
  { pattern: "overnight", Icon: Moon },
  { pattern: "historical", Icon: Landmark },
  { pattern: "colony", Icon: Landmark },
  { pattern: "cruise", Icon: Ship },
  { pattern: "breakfast", Icon: Coffee },
  { pattern: "lunch", Icon: UtensilsCrossed },
  { pattern: "dinner", Icon: UtensilsCrossed },
  { pattern: "sunset", Icon: Sunset },
  { pattern: "sunrise", Icon: Sunrise },
  { pattern: "trekking", Icon: Mountain },
  { pattern: "trek", Icon: Mountain },
  { pattern: "beach", Icon: Umbrella },
  { pattern: "temple", Icon: Landmark },
  { pattern: "shopping", Icon: ShoppingBag },
];

const DESCRIPTION_SPLIT_REGEX = new RegExp(
  `\\b(${DESCRIPTION_ICON_MAP.map((k) => k.pattern).join("|")})\\b`,
  "gi"
);

function renderDescriptionWithIcons(text) {
  if (!text) return null;

  const parts = text.split(DESCRIPTION_SPLIT_REGEX);

  return parts.map((part, i) => {
    if (!part) return null;

    const lower = part.toLowerCase();
    const match = DESCRIPTION_ICON_MAP.find(
      (item) => item.pattern === lower
    );

    if (!match) {
      return <span key={i}>{part}</span>;
    }

    const { Icon } = match;

    return (
      <span
        key={i}
        className="inline-flex items-center whitespace-nowrap rounded-md px-1"
      >
        <Icon
          size={15}
          strokeWidth={2.5}
          className="mr-1 inline-block text-white"
        />
        {part}
      </span>
    );
  });
}

export default function TourDayCard({ day, circleRef }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-20 md:pl-28"
    >

      {/* Timeline Circle */}
      <motion.div
        ref={circleRef}
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          type: "spring",
          stiffness: 180,
        }}
        className="absolute left-0 top-4 z-20 hidden h-16 w-16 items-center justify-center rounded-full border-[5px]  bg-gradient-to-br from-[#462edf] via-[#6957DF] to-[#9F7AEA] text-white shadow-[0_10px_35px_rgba(105,87,223,0.45)] md:flex"
      >
        <div className="flex h-full w-full items-center justify-center rounded-full">
          <span className="text-lg font-black">{day.day}</span>
        </div>
      </motion.div>

      {/* Main Card */}
      <div className="group relative overflow-hidden rounded-[32px] border border-purple-400/20 bg-gradient-to-br from-[#6D28D9] via-[#4C1D95] to-[#2E1065] shadow-[0_40px_80px_rgba(109,40,217,.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_45px_90px_rgba(109,40,217,.45)]">

        {/* ================= BOOKING CARD COLOR SYSTEM ================= */}
        <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/40 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-violet-500/30 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-300/20 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-60 w-full rounded-t-[100%] bg-gradient-to-r from-fuchsia-500/25 via-purple-400/15 to-violet-500/25 blur-md" />
        <div className="pointer-events-none absolute bottom-6 left-0 h-48 w-full rounded-t-[100%] border-t border-white/20 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-70" />
        <div className="pointer-events-none absolute bottom-12 left-0 h-36 w-full rounded-t-[100%] border-t border-fuchsia-300/20 opacity-60" />
        <div className="pointer-events-none absolute bottom-16 left-[-10%] h-52 w-[120%] rounded-t-[100%] border-t border-white/10" />
        <div className="pointer-events-none absolute bottom-24 left-[-10%] h-64 w-[120%] rounded-t-[100%] border-t border-fuchsia-300/20" />
        <div className="pointer-events-none absolute bottom-32 left-[-10%] h-80 w-[120%] rounded-t-[100%] border-t border-purple-300/10" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-60 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-fuchsia-300/80 to-transparent blur-sm" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,transparent_35%,rgba(255,255,255,.12)_50%,transparent_65%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* ================= HEADER ================= */}
<div className="relative overflow-hidden bg-transparent px-6 py-7 md:px-9 md:py-9">

  {/* ================= BACKGROUND PATTERN ================= */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
    <div className="absolute -right-10 -top-16 h-64 w-64 rounded-full border-[40px] border-white" />
    <div className="absolute right-32 top-20 h-24 w-24 rounded-full border border-white" />
    <div className="absolute bottom-[-80px] left-[-30px] h-52 w-52 rounded-full border-[25px] border-white" />
  </div>

  {/* =====================================================
      DAY + LOCATION
  ===================================================== */}

  <div className="relative z-10 flex items-center justify-between gap-4">

    {/* DAY */}
    <div className="flex shrink-0 items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-white backdrop-blur-md">

      <CalendarDays
        size={15}
        strokeWidth={2.5}
      />

      <span className="text-sm font-extrabold">
        Day {day.day}
      </span>

    </div>


    {/* LOCATION */}
    <div className="flex min-w-0 items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-white backdrop-blur-md">

      <MapPin
        size={16}
        strokeWidth={2.5}
        className="shrink-0"
      />

      <div className="min-w-0">

        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/60">
          Location
        </p>

        <p className="truncate text-sm font-extrabold md:text-base">
          {day.location || day.distance}
        </p>

      </div>

    </div>

  </div>


  {/* =====================================================
      HEADING
  ===================================================== */}

  <div className="relative z-10 mt-4 rounded-lg border border-white/25 bg-white/10 px-5 py-3.5 backdrop-blur-md md:px-7 md:py-4">

    <h3 className="text-center text-[24px] font-black leading-tight tracking-tight text-white md:text-[32px]">
      {day.title}
    </h3>

  </div>


  {/* =====================================================
      DESCRIPTION / PARAGRAPH
  ===================================================== */}

  <div className="relative z-10 mt-4 rounded-lg border border-white/25 bg-white/5 px-5 py-3 backdrop-blur-md md:px-7 md:py-4">

    <p className="text-[14px] font-medium leading-[1.85] tracking-[0.01em] text-white/90 md:text-[15px] md:leading-[1.9]">
      {renderDescriptionWithIcons(day.description)}
    </p>

  </div>


  {/* ================= BOTTOM GLOW ================= */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

</div>

        {/* ================= FACILITIES ================= */}
        {day.facilities?.length > 0 && (
          <div className="relative border-b border-white/15 bg-white/5 px-6 py-5 backdrop-blur-xl md:px-8">

            <div className="flex flex-wrap gap-2.5">
              {day.facilities.map((facility, index) => {
                const Icon = facility.icon;

                return (
                  <motion.div
                    key={facility.id}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                    }}
                    className="group/facility flex cursor-default items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-bold text-white shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15 hover:shadow-md"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#C084FC] text-white shadow-md transition-colors duration-300 group-hover/facility:bg-white group-hover/facility:text-[#6D28D9]">
                      <Icon size={14} strokeWidth={2.5} />
                    </span>

                    <span>{facility.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= IMAGES ================= */}
        {day.images?.length > 0 && (
          <div className="relative grid gap-4 bg-transparent p-5 md:grid-cols-2 md:p-6">

            {day.images.slice(0, 2).map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group/image relative overflow-hidden rounded-[24px] shadow-md"
              >
                {image ? (
                  <>
                    <img
                      src={image}
                      alt={`${day.title} ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-110 md:h-72"
                    />

                    {/* Image Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover/image:opacity-90" />

                    {/* Image Number */}
                    {/* <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs font-black text-white backdrop-blur-md">
                      0{index + 1}
                    </div> */}

                    {/* Shine */}
                    <div className="pointer-events-none absolute -left-[120%] top-0 h-full w-[70%] rotate-[18deg] bg-white/10 blur-xl transition-all duration-1000 group-hover/image:left-[130%]" />
                  </>
                ) : (
                  <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-purple-50 to-violet-100 md:h-72">
                    <div className="text-center">
                      <Camera className="mx-auto mb-3 text-purple-300" size={32} />
                      <p className="text-sm font-semibold text-purple-400">
                        Image Coming Soon
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </motion.div>
  );
}