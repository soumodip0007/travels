import { CalendarDays, MapPin } from "lucide-react";

export default function TourDayCard({ day, circleRef }) {
  return (
    <div className="td-root relative mb-16 md:pl-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .td-root { font-family: 'Inter', sans-serif; }
        .td-serif { font-family: 'Fraunces', serif; font-variant-numeric: tabular-nums; }

        .td-notch { background: #FBF8F2; }
      `}</style>

      {/* Timeline Circle — ticket numeral */}
      <div
        ref={circleRef}
        className="td-serif absolute left-0 top-2 hidden h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#E3A23D] to-[#C2185B] text-xl font-bold text-white shadow-xl shadow-[#C2185B]/25 md:flex"
      >
        {day.day}
      </div>

      {/* Card */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        {/* Top */}
        <div className="p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FBF0DD] px-4 py-1 text-sm font-semibold text-[#B4761F]">
                <CalendarDays size={16} />
                Day {day.day}
              </div>

              <h3 className="td-serif text-2xl font-bold text-[#1E2A47]">{day.title}</h3>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-[#E9F4F2] px-5 py-2 text-[#0F6E66]">
              <MapPin size={18} />
              <span className="font-medium">{day.distance}</span>
            </div>
          </div>

          <p className="mt-6 leading-8 text-gray-600">{day.description}</p>
        </div>

        {/* Perforated tear line */}
        <div className="relative h-0">
          <div className="td-notch absolute -left-3.5 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full" />
          <div className="td-notch absolute -right-3.5 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full" />
          <div className="mx-6 border-t-2 border-dashed border-[#E4DFD1]" />
        </div>

        {/* Spot Images */}
        <div className="grid gap-4 p-6 md:grid-cols-2">
          {day.images.slice(0, 2).map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`${day.title} ${index + 1}`}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}