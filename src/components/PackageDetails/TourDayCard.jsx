import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

export default function TourDayCard({ day, circleRef }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative mb-16 md:pl-24"
    >
      {/* Timeline Circle */}

      <div
        ref={circleRef}
        className="absolute left-0 top-2 hidden h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#462edf] to-[#7941eb] text-xl font-bold text-white shadow-[0_0_30px_rgba(107,90,225,0.8)] md:flex"
      >
        {day.day}
      </div>

      {/* Card */}

      <div className="overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-br from-[#6957DF]/15 via-[#9F7AEA]/10 to-purple-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

        {/* Top */}

        <div className="border-b border-purple-50 bg-gradient-to-br from-[#7C3AED] via-purple-300 to-purple-400 p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-[#6957DF]">
                <CalendarDays size={16} />
                Day {day.day}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {day.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-purple-50 px-5 py-2 text-[#6957DF]">
              <MapPin size={18} />
              <span className="font-medium">{day.distance}</span>
            </div>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            {day.description}
          </p>
        </div>

        {/* Facilities */}

        {day.facilities?.length > 0 && (
          <div className="flex flex-wrap gap-3 border-b border-purple-100 bg-white/70 px-6 py-5 md:px-8">
            {day.facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <div
                  key={facility.id}
                  className="flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2.5 text-sm font-medium text-[#6957DF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-purple-100 hover:shadow-md"
                >
                  <Icon size={18} strokeWidth={2} />
                  <span>{facility.label}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Spot Images */}

        {day.images?.length > 0 && (
          <div className="grid gap-4 p-6 md:grid-cols-2">
            {day.images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
              >
                {image ? (
                  <>
                    <img
                      src={image}
                      alt={`${day.title} ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </>
                ) : (
                  <div className="flex h-72 w-full items-center justify-center rounded-2xl bg-purple-50 text-sm text-purple-400">
                    Image Coming Soon
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}