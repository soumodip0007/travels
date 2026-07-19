import { CalendarDays, MapPin } from "lucide-react";

export default function TourDayCard({ day }) {
  return (
    <div className="relative mb-16 md:pl-24">
      {/* Timeline Circle */}

      <div className="absolute left-0 top-2 hidden h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-orange-500 text-xl font-bold text-white shadow-xl md:flex">
        {day.day}
      </div>

      {/* Card */}

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

        {/* Top */}

        <div className="border-b border-slate-100 p-8">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
                <CalendarDays size={16} />
                Day {day.day}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {day.title}
              </h3>

            </div>

            <div className="flex items-center gap-2 rounded-full bg-sky-50 px-5 py-2 text-sky-700">

              <MapPin size={18} />

              <span className="font-medium">
                {day.distance}
              </span>

            </div>

          </div>

          <p className="mt-6 leading-8 text-gray-600">
            {day.description}
          </p>

        </div>

        {/* Spot Images */}

        <div className="grid gap-4 p-6 md:grid-cols-3">

          {day.images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`${day.title} ${index + 1}`}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}