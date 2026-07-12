import {
  Plane,
  Hotel,
  Map,
  Compass,
  Train,
  Bus,
} from "lucide-react";

const features = [
  {
    title: "Flights",
    icon: Plane,
    link: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Hotels",
    icon: Hotel,
    link: "#",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Tour Packages",
    icon: Map,
    link: "#",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Adventure",
    icon: Compass,
    link: "#",
    color: "from-indigo-500 to-blue-700",
  },
  {
    title: "Train Booking",
    icon: Train,
    link: "#",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Bus Booking",
    icon: Bus,
    link: "#",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative z-40 -mt-24">
      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="grid grid-cols-2 gap-6 rounded-[35px] border border-white/30 bg-white/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-3xl md:grid-cols-3 lg:grid-cols-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                className="group flex flex-col items-center rounded-3xl p-5 transition-all duration-500 hover:-translate-y-4 hover:bg-white hover:shadow-2xl"
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} text-white shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="mt-5 text-center text-lg font-bold text-slate-800 transition group-hover:text-blue-700">
                  {item.title}
                </h3>

                <span className="mt-2 text-sm text-gray-500 transition group-hover:text-orange-500">
                  Explore →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}