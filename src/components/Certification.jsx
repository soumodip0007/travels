const clientsData = [
  { id: 1, url: "https://logo.clearbit.com/google.com", name: "Google" },
  { id: 2, url: "https://logo.clearbit.com/microsoft.com", name: "Microsoft" },
  { id: 3, url: "https://logo.clearbit.com/amazon.com", name: "Amazon" },
  { id: 4, url: "https://logo.clearbit.com/netflix.com", name: "Netflix" },
  { id: 5, url: "https://logo.clearbit.com/adobe.com", name: "Adobe" },
  { id: 6, url: "https://logo.clearbit.com/spotify.com", name: "Spotify" },
  { id: 7, url: "https://logo.clearbit.com/apple.com", name: "Apple" },
  { id: 8, url: "https://logo.clearbit.com/airbnb.com", name: "Airbnb" },
];

function LogoCard({ item }) {
  return (
    <div className="mx-5 flex h-28 w-52 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl">
      <img
        src={item.url}
        alt={item.name}
        className="max-h-16 object-contain grayscale transition duration-300 hover:grayscale-0"
      />
    </div>
  );
}

export default function Partnerships() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white py-10">

      {/* Background Blur */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl"></div>
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className=" text-5xl font-black text-slate-800">
            <span className="bg-gradient-to-r from-sky-600 to-orange-500 bg-clip-text text-transparent">
              {" "}Certifications
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            We proudly collaborate with trusted organizations and global
            partners to deliver unforgettable travel experiences.
          </p>
        </div>

        {/* Marquee */}
        <div className="group relative overflow-hidden rounded-2xl border border-sky-200 bg-white py-6 shadow-xl">

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"></div>

          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {/* render the list twice for a seamless loop */}
            {[...clientsData, ...clientsData].map((item, i) => (
              <LogoCard key={`${item.id}-${i}`} item={item} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}